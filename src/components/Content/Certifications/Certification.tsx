import { Box, styled, Button } from "@mui/material";
import { StyleConstants } from "../../../styles/StyleConstants";
const CertificationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
const InfoWrapper = styled(Box)(() => ({
  paddingRight:15,
  lineHeight:1.53,
  "& .name": {
    marginBottom: 15,
    fontSize: StyleConstants.SIZE_ITEM_TITLE,
  },
}));
const ImageBox = styled(Box)(({ theme }) => ({
  marginRight: 10,
  "& img": {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
}));
interface certficate {
  name?: string;
  org?: string;
  issued?: string;
  expiry?: string;
  credentialId?: string;
  credentialUrl?: string;
  url?: string;
}
interface Prop {
  certficate: certficate;
}
export const Certification = ({ certficate }: Prop) => {
  const {
    name = "",
    org = "",
    issued = "",
    expiry = "",
    credentialId = "",
    credentialUrl = "",
    url = "",
  } = certficate;
  return (
    <CertificationWrapper>
      <InfoWrapper>
        <div className="name bold">{name}</div>
        <div>
          <b>Org:</b> {org}
        </div>
        <div>
          <b>Issued:</b> {issued}
        </div>
        {expiry && (
          <div>
            <b>Expiry:</b> {expiry}
          </div>
        )}
        {credentialId && (
          <div>
            <b>Id:</b> {credentialId}
          </div>
        )}
        <div>
          <Button>Certificate</Button>
        </div>
      </InfoWrapper>
      <ImageBox>
        <img src={url} />
      </ImageBox>
    </CertificationWrapper>
  );
};
