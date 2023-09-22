import printData from '../json/printsData.json'

export function getImageSrc(src: string): string {
  try {
    const data = printData.find((value) =>
      value.src.includes(src)
    );

    if (!data) throw new Error("Failed to find background");
    return data.src
  } catch (e) {
    console.log("Failed to get printData");
    return ''
  }
}
