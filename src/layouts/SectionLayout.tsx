import type { ReactNode } from "react";


type SectionLayoutProps = {
    children: ReactNode
    id: string;
}

const SectionLayout = ({ children, id }: SectionLayoutProps) => {
  return (
    <section id={id}>{children}</section>
  )
}

export default SectionLayout