class MediaFactory {
    constructor(data, name) {
        if (data.image) {
            return new ImageMedia(data, name)
        } else if (data.video) {
            return new VideoMedia(data, name)
        } else {
            throw 'Unknown type format'
        }
    }
}