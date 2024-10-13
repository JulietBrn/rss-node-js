import { pipeline } from 'stream'
import { createWriteStream, createReadStream} from 'fs';
import zlib from 'zlib'

export function decompress (pathFrom, pathTo) {
  const readStream = createReadStream(pathFrom)
  const writeStream = createWriteStream(pathTo)

  const compressStream = zlib.createBrotliDecompress()

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
