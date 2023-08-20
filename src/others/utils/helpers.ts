import languageStrings from "./langStrings";
import moment from "moment";
import { Alert, Platform } from "react-native";
import { openCamera, openPicker } from "react-native-image-crop-picker";
// import DocumentPicker from "react-native-document-picker";


export function removeSpaceAndLowerCase(inputString: string) {
    // Remove spaces using regular expression and replace with an empty string
    const stringWithoutSpaces = inputString.replace(/\s/g, "");

    // Convert the string to lower case
    const resultString = stringWithoutSpaces.toLowerCase();

    return resultString;
}
export function removeSpacesAndCamelCase(inputString: string) {
    // Remove spaces from the string
    let str = inputString.replace(/\s+/g, "");

    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
}

export function randomColorGenerator() {
    const letters = "0123456789ABCDEF";
    let coolor;
    do {
        coolor = "#";
        for (let i = 0; i < 6; i++) {
            coolor += letters[Math.floor(Math.random() * 16)];
        }
    } while (coolor === "#000000" || coolor === "#FFFFFF");

    return coolor;
}

export function capitalFistStringLetter(str1: string) {
    let str = str1.toString();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getTimeElapsedString = (timestamp: string): string => {
    const now = moment();
    const time = moment(timestamp);
    return time.from(now);
};
export const checkEmptyString = (str: any) => {
    if (str === null || str === undefined || str === "" || isFinite(str)) {
        return "---";
    } else {
        return str;
    }
};
export function isNotObject(value) {
    return typeof value !== 'object' || value === null;
}

export const isEmptyObject = (obj) => {
    return Object.getOwnPropertyNames(obj).length === 0;
}

export const _openCamera = async (setData: any, onError: any) => {
    try {
        const response = await openCamera({
            cropping: true,
            showCropGuidelines: true,
            showCropFrame: true,
            enableRotationGesture: true,
            freeStyleCropEnabled: true,
            mediaType: "photo",
            compressImageQuality: 0.5,
            // forceJpg: Platform.OS === "ios",
            //waitAnimationEnd: false,
        });
        // const size = UI_API.bytesToSize(response?.size) || "";
        // if (size.split(" ")[0] * 1 < 3 && size.includes("MB")) throw new Error("Oops! It seems your image size is greater than 2 MB.");
        const ext = response?.path?.split("/");
        const fileName = ext[ext.length - 1];
        setData({
            uri:
                Platform.OS === "android"
                    ? response?.path
                    : response?.path.replace("file://", ""),
            name: fileName,
            type: response?.mime,
        });
    } catch (error) {
        console.log(error);
    }
};


export const _openGallery = async (setData: any, onError?: any) => {
    try {
        const response = await openPicker({
            mediaType: "photo",
            cropping: true,
            width: 300,
            height: 400,
            // forceJpg: Platform.OS === "ios",
            waitAnimationEnd: false,
        });

        // const size = UI_API.bytesToSize(response?.size) || "";
        // if (size.split(" ")[0] * 1 < 3 && size.includes("MB")) throw new Error("Oops! It seems your image size is greater than 2 MB.");
        const ext = response?.path?.split("/");
        const fileName = ext[ext.length - 1];
        setData({
            uri:
                Platform.OS === "android"
                    ? response?.path
                    : response?.path.replace("file://", ""),
            name: fileName,
            type: response?.mime,
        });
    } catch (error) {
        console.log(error);
    }
};

const pickSingleFile = async (
    returnFile: any,
    onError: any,
    fileType?: string
) => {
    try {
        console.log({ fileType });
        // const res = await DocumentPicker.pickSingle({
        // type:
        // fileType === "images"
        // ? DocumentPicker.types.images
        // :
        // DocumentPicker.types.pdf,
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
        // });
        //Printing the log realted to the file
        // console.log('res : ' + JSON.stringify(res));
        // console.log('URI : ' + res.uri);
        // console.log('Type : ' + res.type);
        // console.log('File Name : ' + res.name);
        // console.log('File Size : ' + res.size);
        //Setting the state to show single file attributes
        // returnFile({
        //     name: res.name,
        //     type: res.type,
        //     url: res.uri,
        //     size: res.size,
        // });
    } catch (err) {
        //Handling any exception (If any)
        // if (DocumentPicker.isCancel(err)) {
        // onError("Canceled from document picker");
        // } else {
        // onError("Unknown Error: " + JSON.stringify(err));
        // }


    };
}


export const changeLanguage = (language: string) => {
    languageStrings.setLanguage(language)
}

const RemoveItemFromArray = (array: [], item: {}, callbackforSetState: any) => {
    let tempArray = Object.assign([], array);
    let index = tempArray.indexOf(item);
    if (index > -1) {
        tempArray.splice(index, 1);
    }
    callbackforSetState(tempArray);
};

const AddORremoveFromArray = (array: [], item: {}, callbackforSetState: any) => {
    let tempArray = Object.assign([], array);
    let index = tempArray.indexOf(item);
    if (index > -1) {
        tempArray.splice(index, 1);
    } else {
        tempArray?.push(item);
    }
    callbackforSetState(tempArray);
};

const changeFlag = (array: [], item: {}, index: number, callbackforSetState: any) => {
    let tempArray = Object.assign([], array);
    item?.isSelect == true
        ? (array[index].isSelect = false)
        : (array[index].isSelect = true);
    callbackforSetState(tempArray);
};

const AddItemtoArray = (array: [], item: any, callbackforSetState: any) => {
    let newItem = item.trim();
    let tempArray = Object.assign([], array);
    let length = array.length;
    let index = array.indexOf(newItem);
    // console.log("index-->  ", index)
    length < 1
        ? tempArray.push(newItem)
        : index == -1
            ? tempArray.push(newItem)
            : // FlashMessage("Already added!")
            console.log('Already added!');
    callbackforSetState(tempArray);
};
const ConcatArray = (newArray: [], oldArray: [], finalArray: any) => {
    let oldTemp = Object.assign([], oldArray);
    let finalArrayAfterConcat = oldTemp.concat(newArray);
    finalArray(finalArrayAfterConcat);
};

const formatBytes = (bytes, decimals = 2) => {
    console.log('bytes  => ', bytes);
    if (!+bytes) {
        return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    let mbs = `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;

    let MB = mbs.split('.');
    let exactMbs = MB[0];
    console.log(MB, ' MB ', exactMbs, ' ', MB[1].includes('KB'));
    if (MB[1].includes('KB')) {
        return 4;
    } else {
        return exactMbs;
    }
};
const ShowAlert = ({ title, des, onPressYes }: any) => {
    Alert.alert(
        title,
        des,
        [
            {
                text: "N0",
                onPress: () => console.log("no Pressed"),
                style: "cancel"
            },
            { text: "yes", onPress: onPressYes }
        ]
    );
}
const SelectUnSelectItems = async (item: any, array: [], setState: () => void) => {
    var selectedIdss = Object.assign([], array)
    if (selectedIdss.includes(item.id)) {
        selectedIdss = selectedIdss.filter(id => id !== item.id)
    }
    else {
        selectedIdss.push(item.id)
    }
    setState(selectedIdss)
}

const uploadImageOnS3F = (file: string, uploading: (v: boolean) => void, onSuccess: () => void) => {
    console.log({ file })
    try {
        //this bucket is only for divet don't use it here
        // return new Promise(async (resolve, reject) => {
        //   uploading(true);

        //   const BUCKET_NAME = 'divet';
        //   const IAM_USER_KEY = 'AKIA4CTJK7BVUGLYQOUW';
        //   const IAM_USER_SECRET = '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';

        //   const s3bucket = new AWS.S3({
        //     accessKeyId: IAM_USER_KEY,
        //     secretAccessKey: IAM_USER_SECRET,
        //     Bucket: BUCKET_NAME,
        //     signatureVersion: 'v4',
        //     region: 'us-east-2',
        //   });

        //   let contentType = file?.mediaType;
        //   let contentDeposition = 'inline;filename="' + `${file?.mediaType} ${Math.floor(new Date().getTime())}` + '"';
        //   const base64 = await fs.readFile(file.path, 'base64')
        //   // console.log("base64=>  ", base64)
        //   const arrayBuffer = decode(base64);

        //   s3bucket.createBucket(async () => {
        //     const params = {
        //       Bucket: BUCKET_NAME,
        //       Key: `${file?.mediaType}${Math.floor(new Date().getTime())}${file?.mediaType == "video" ? ".mp4" : "image"}`,
        //       Body: arrayBuffer,
        //       ContentDisposition: contentDeposition,
        //       ContentType: contentType,
        //     };
        //     await s3bucket
        //       .upload(params)
        //       .promise()
        //       .then(data => {
        //         console.log('then S3 upload => ', data.Location);
        //         let s3Url = data?.Location
        //         // onSuccess(s3Url)
        //         resolve(s3Url);
        //       })
        //       .catch(err => {
        //         FlashMessage("Image uploading error", "red")
        //         reject()
        //         uploading(false)
        //         console.log("catch S3 upload", err);
        //       });
        //   });

        // })

    } catch (error) {
        uploading(false);
    }

};

export {
    ShowAlert,
    AddORremoveFromArray,
    AddItemtoArray,
    RemoveItemFromArray,
    ConcatArray,
    formatBytes,
    changeFlag,
    SelectUnSelectItems,
};