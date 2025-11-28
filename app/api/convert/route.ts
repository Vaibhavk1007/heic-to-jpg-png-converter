import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

export const runtime = "nodejs"
export const maxDuration = 60

type OutputFormat = "JPG" | "PNG"

interface ConversionResponseFile {
  name: string
  size: number
  downloadUrl: string
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const formatValue = (formData.get("format") as string) || "JPG"
    const format: OutputFormat = formatValue === "PNG" ? "PNG" : "JPG"

    const qualityValue = formData.get("quality") as string | null
    const quality = qualityValue ? Number(qualityValue) : 80

    const files = formData.getAll("files")

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: "No files were uploaded" },
        { status: 400 },
      )
    }

    const convertedFiles: ConversionResponseFile[] = []

    for (const entry of files) {
      if (!(entry instanceof Blob)) {
        continue
      }

      const file = entry as File
      const arrayBuffer = await file.arrayBuffer()
      const inputBuffer = Buffer.from(arrayBuffer)

      let image = sharp(inputBuffer)

      // You can plug resize logic here later if needed, based on a "resize" field:
      // const resize = formData.get("resize") as string | null

      if (format === "PNG") {
        image = image.png()
      } else {
        image = image.jpeg({ quality })
      }

      const outputBuffer = await image.toBuffer()
      const base64 = outputBuffer.toString("base64")

      const ext = format === "PNG" ? "png" : "jpg"
      const mime = format === "PNG" ? "image/png" : "image/jpeg"
      const baseName = file.name.replace(/\.[^.]+$/, "")
      const outputName = `${baseName}.${ext}`

      convertedFiles.push({
        name: outputName,
        size: outputBuffer.length,
        downloadUrl: `data:${mime};base64,${base64}`,
      })
    }

    return NextResponse.json(
      {
        success: true,
        files: convertedFiles,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Conversion error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Conversion failed",
      },
      { status: 500 },
    )
  }
}
