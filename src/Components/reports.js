import React, { Component } from 'react'
import { View, Text, PermissionsAndroid, Alert, TouchableOpacity } from 'react-native'
import moment from 'moment'
import RNFetchBlob from 'rn-fetch-blob';



export async function request_location_runtime_permission() {

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                'title': 'We Need WRITE_EXTERNAL_STORAGE Permission',
                'message': ' App needs access to your RITE_EXTERNAL_STORAGE '
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        }
        else {
            Alert.alert("Download  Permission Not Granted");
        }
    } catch (err) {
        console.warn(err)
    }
}
export default class Report extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' }
            ]
        }
    }


    async componentDidMount() {

        await request_location_runtime_permission()

    }

    downloadImage = (data) => {
        console.log(data, '-----')
        var date = new Date();
        var image_URL = data;
        var ext = this.getExtention(image_URL);
        ext = "." + ext[0];
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: PictureDir + "/image_" + Math.floor(date.getTime()
                    + date.getSeconds() / 2) + ext,
                description: 'Image'
            }
        }
        config(options).fetch('GET', image_URL).then((res) => {
            Alert.alert("Image Downloaded Successfully.");
        });
    }

    getExtention = (filename) => {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
            undefined;
    }



    render() {
        var data = this.props.navigation.state.params.reports
        var sort = Object.values(data)
        console.log(sort)
        return (
            <View>

                <Text style={{ textAlign: 'center', fontSize: 28, color: '#48bdc5' }}>
                    Dr Remark History
                </Text>
                {sort.map((val, ind) => {
                    console.log(val)
                    return (

                        <View style={{ flexDirection: 'row', borderWidth: 0.33, margin: 3, borderRadius: 10, justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: 20, }}> {moment(val.date).format('L')}</Text>

                            <TouchableOpacity onPress={() => { this.downloadImage(val.url) }}>

                                <Text style={{ fontSize: 23, justifyContent: 'center', marginLeft: 25, flex: 1 }}> Download</Text>
                            </TouchableOpacity>
                        </View>
                    )



                })}



            </View>
        )
    }
}