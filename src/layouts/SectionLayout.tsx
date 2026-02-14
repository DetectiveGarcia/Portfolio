import type { ReactNode } from "react";


type SectionLayoutProps = {
    children: ReactNode
    sectionId: string;
}

const SectionLayout = ({ children, sectionId }: SectionLayoutProps) => {
  return (
    <section id={sectionId}>{children}</section>
  )
}

export default SectionLayout