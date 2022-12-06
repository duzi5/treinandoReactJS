import Titulo from "./titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <div className="h-8 sm:h-full md:h-full lg:h-20 xl:h-full w-full bg-gray-400 rounded-md">
        <Titulo>{props.titulo}</Titulo>
        <div className="p-6 m-5" >{props.children}</div>
      </div>
    </>
  );
}
