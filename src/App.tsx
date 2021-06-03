import "./styles.css";
import axios from "axios";
//import urlencode from "urlencode";
//import "cors";

const getstuff = async () => {
  let startIndex = 0;
  let URL =
    "http://openmaps.gov.bc.ca/geo/ows?service=WFS&version=2.0&request=GetFeature&typeName=pub:WHSE_IMAGERY_AND_BASE_MAPS.GSR_SCHOOLS_K_TO_12_SVW&startindex=" +
    startIndex +
    "&count=500&sortBy=SEQUENCE_ID&outputFormat=application/json&srsname=EPSG:4326";
  let URL2 =
    "http%3A%2F%2Fopenmaps.gov.bc.ca%2Fgeo%2Fows%3Fservice%3DWFS%26version%3D2.0%26request%3DGetFeature%26typeName%3Dpub%3AWHSE_IMAGERY_AND_BASE_MAPS.GSR_SCHOOLS_K_TO_12_SVW%26startindex%3D0%26count%3D500%26sortBy%3DSEQUENCE_ID%26outputFormat%3Dapplication%2Fjson%26srsname%3DEPSG%3A4326";
  let URL3 =
    "http://openmaps.gov.bc.ca/geo/ows?service=WFS&version=2.0&request=GetFeature&typeName=pub%3AWHSE_IMAGERY_AND_BASE_MAPS.GSR_SCHOOLS_K_TO_12_SVW&startindex=0&count=500&sortBy=SEQUENCE_ID&outputFormat=application%2Fjson&srsname=EPSG%3A4326";
  let URL4 =
    "openmaps.gov.bc.ca/geo/ows?service=WFS&version=2.0&request=GetFeature&typeName=pub%3AWHSE_IMAGERY_AND_BASE_MAPS.GSR_SCHOOLS_K_TO_12_SVW&startindex=0&count=500&sortBy=SEQUENCE_ID&outputFormat=application%2Fjson&srsname=EPSG%3A4326";
  let URL5 = "http://openmaps.gov.bc.ca/geo";
  let resp;
  let options = {
    /*    headers: {
      "Access-Control-Allow-Origin": "*"
    }*/
  };
  try {
    resp = await axios.get(URL5, options);

    console.log(JSON.stringify(resp));
    console.log(resp.data);
    console.log("end of try block");
  } catch (e) {
    console.log("error block");
    console.log(JSON.stringify(e));
    console.log(e.response);
  }
};

getstuff();
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
