import path from "path";
import { fileURLToPath} from "url";

const  __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
    entry: './microfrontend-basics/index.js',
    mode:"development",
    output:{
        publicPath:'/',
        path:path.resolve(__dirname,'dist'),
    },
    devServer:{
        historyApiFallback:true,
        headers:{
            "Access-Control-Allow-Origin" : "*",
        },
        client:{
            webSocketURL :{
                hostname:'localhost'
            }
        },
        allowedHosts:'all',
        port:8800,
        https:false,
    }
}