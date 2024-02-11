const Footer = () => {
  return (
    <footer className="mt-2 mx-3 py-1 border-t-[1px]">
      <small className="mb-2 text-xs block text-center">
        &copy; 2024 Lucas. Todos los derechos reservados.
      </small>
      <p className="text-xs text-center">
        <span className="font-semibold">About this web site:</span> devloped
        with React & Next.js (App Router & Server Actions), Typescript, Tailwind
        CSS, Framer Motion, Zustand, Vercel hosting{" "}
      </p>
    </footer>
  );
};

export default Footer;
