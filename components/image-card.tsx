import Image from 'next/image'

const resizeImage = (image: AirtableAttachment): AirtableAttachment => {
  if (image.width > 750) {
    image.height = (image.height * 750) / image.width
    image.width = 750
  }
  return image
}

const ImageCard = ({
  image,
  index,
  click
}: {
  image: AirtableAttachment
  index: number
  click?: Function
}) => {
  image = resizeImage(image)
  return (
    <div className="flex flex-col mx-auto hover:scale-[1.03] transition transform">
      <Image
        src={image.url}
        alt="Recap image from Airtable"
        width={image.width}
        height={image.height}
        key={image.url}
        priority
        className="rounded-lg"
        onClick={() => (click ? click(index) : {})}
      />
    </div>
  )
}

export default ImageCard
