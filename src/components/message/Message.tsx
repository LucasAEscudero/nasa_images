"use client";

interface Props {
  title?: string;
  message: string;
}

export default function Message({ message }: Props) {
  return (
    <>
      <div className="m-auto md:mt-[12.5%] mt-[30%]">
        <h2 className="text-center">{message}</h2>
      </div>
    </>
  );
}
