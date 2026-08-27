param(
  [string]$OutputDirectory = (Join-Path $PSScriptRoot '..\public')
)

Add-Type -AssemblyName System.Drawing

function New-HistoryIcon {
  param(
    [int]$Size,
    [string]$FileName,
    [bool]$Maskable = $false
  )

  $bitmap = [System.Drawing.Bitmap]::new($Size, $Size)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

  $moss = [System.Drawing.ColorTranslator]::FromHtml('#234c3e')
  $cream = [System.Drawing.ColorTranslator]::FromHtml('#f8f4eb')
  $gold = [System.Drawing.ColorTranslator]::FromHtml('#e1aa44')
  $graphics.Clear($moss)

  $safeScale = if ($Maskable) { 0.70 } else { 0.78 }
  $diameter = [int]($Size * $safeScale)
  $offset = [int](($Size - $diameter) / 2)
  $stroke = [Math]::Max(5, [int]($Size * 0.025))
  $ring = [System.Drawing.Pen]::new($gold, $stroke)
  $graphics.DrawEllipse($ring, $offset, $offset, $diameter, $diameter)

  $fontSize = [int]($Size * 0.39)
  $font = [System.Drawing.Font]::new('Georgia', $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
  $format = [System.Drawing.StringFormat]::new()
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $letterBox = [System.Drawing.RectangleF]::new(0, [single]($Size * 0.01), $Size, [single]($Size * 0.78))
  $graphics.DrawString('H', $font, [System.Drawing.SolidBrush]::new($cream), $letterBox, $format)

  $lineWidth = [int]($Size * 0.42)
  $lineHeight = [Math]::Max(5, [int]($Size * 0.035))
  $graphics.FillRectangle([System.Drawing.SolidBrush]::new($gold), [int](($Size - $lineWidth) / 2), [int]($Size * 0.76), $lineWidth, $lineHeight)

  $path = Join-Path $OutputDirectory $FileName
  $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $ring.Dispose()
  $font.Dispose()
  $format.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null
New-HistoryIcon -Size 192 -FileName 'pwa-192.png'
New-HistoryIcon -Size 512 -FileName 'pwa-512.png'
New-HistoryIcon -Size 512 -FileName 'pwa-maskable-512.png' -Maskable $true
New-HistoryIcon -Size 180 -FileName 'apple-touch-icon.png'
