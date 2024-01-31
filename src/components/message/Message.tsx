"use client";

interface Props {
  title?: string;
  message: string;
}

export default function Message({ title, message }: Props) {
  return (
    <section>
      {title && (
        <div style={{ borderBottom: "1px solid white" }}>
          <h2 className="text-center text-2xl my-2">{title}</h2>
        </div>
      )}
      <div className="absolute top-2/4 left-[37.5%]">
        <h2 className="text-center"> {message}</h2>
      </div>
    </section>
  );
}
