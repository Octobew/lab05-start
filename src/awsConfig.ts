import {S3Client} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  credentials: {
    accessKeyId: "557d38eed3f72a03ad7713a21c93551a",
    secretAccessKey:
      "3fd76fd4a1e34c0591c8e8cbed3792f9058f20547d0194aed9bae5bfe82c3fa1"
  },
  endpoint: "https://oqvoiszjwpmovshcredo.storage.supabase.co/storage/v1/s3",
  region: "ap-northeast-2",
  forcePathStyle: true

});
export default s3Client;