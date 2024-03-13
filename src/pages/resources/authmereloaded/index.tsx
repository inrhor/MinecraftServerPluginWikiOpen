import ResPage from "@site/src/components/resources/ResPage";
import Contemt from "./content.mdx";

export default function AuthMeReloadedPage() {
    return (
        <ResPage plugin='AuthMeReloaded' content={<Contemt />} />
    )
}