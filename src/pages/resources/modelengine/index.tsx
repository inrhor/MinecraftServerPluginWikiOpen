import ResPage from "@site/src/components/resources/ResPage";
import Contemt from "./content.mdx";

export default function ModelEnginePage() {
    return (
        <ResPage plugin="ModelEngine" content={<Contemt />}/>
    )
}