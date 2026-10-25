import InspoGallery from "@/components/InspoGallery";
import { categories, componentPrompts, pieces } from "@/lib/inspiration";

export default function Home() {
  return (
    <InspoGallery
      pieces={pieces}
      categories={categories}
      componentPrompts={componentPrompts}
    />
  );
}
