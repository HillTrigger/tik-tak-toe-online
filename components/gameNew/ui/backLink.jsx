import Link from "next/link";
import { LeftArrow } from "./icons/LeftArrow";

export function BackLink() {
  return (
    <Link href="#" className="flex gap-2 items-center text-teal-600">
      <LeftArrow />
      На главную
    </Link>
  );
}
