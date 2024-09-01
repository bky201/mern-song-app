import Menubar from "../components/nav/Menubar";
import UploadForm from "../components/forms/UploadForm";

import { TitleContainer, UploadContainer} from "./upload.styles";

export default function Upload() {

    return (
        <div>
            <TitleContainer>Upload Song</TitleContainer>
            <Menubar />
            <UploadContainer>
                <UploadForm />
            </UploadContainer>
        </div>
    );
}