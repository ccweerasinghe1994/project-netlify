import Image from "next/image";
import { fetAllPost } from "./components/post/post-list";

export default async function Home() {
  const response = await fetAllPost();
  console.log(response.length);
  return (
    <div>
      This is a home page
      <div className="h-96 w-96 relative">
        <Image
          src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg"
          alt="Picture of the author"
          width={1260}
          height={750}
        />
      </div>
    </div>
  );
}
