import { pipeline } from 'stream'
import { createWriteStream, createReadStream} from 'fs';
import zlib from 'zlib'

export function compress (pathFrom, pathTo) {

  const readStream = createReadStream(pathFrom)
  const writeStream = createWriteStream(pathTo.endsWith('.br') ? pathTo : `${pathTo}.br`)

  const compressStream = zlib.createBrotliCompress()

  pipeline(
    readStream,
    compressStream,
    writeStream,
    (err) => {
      if(err) {
        console.log('Operation failed', err.message)
      }
    }
  )
}
