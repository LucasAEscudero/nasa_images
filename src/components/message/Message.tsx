"use client";

interface Props {
  title?: string;
  message: string;
}

export default function Message({ message }: Props) {
  return (
    <>
      <div className="absolute top-2/4 left-[37.5%]">
        <h2 className="text-center"> {message}</h2>
      </div>
    </>
  );
}
