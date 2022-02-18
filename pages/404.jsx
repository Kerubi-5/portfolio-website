import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container">
      Not Found return to{" "}
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
