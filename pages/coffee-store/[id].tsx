import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      Coffee store
      <Link href="/">
        <a>Go back home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
