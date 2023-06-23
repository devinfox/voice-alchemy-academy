// import React from 'react';
// import ReactPlayer from 'react-player';
// import VideoThumbnailGenerator from 'video-thumbnail-generator';

// function VideoLibrary({ videos }) {
//   const thumbnailGenerator = new VideoThumbnailGenerator();

//   const generateThumbnail = (videoFile) => {
//     const thumbnail = thumbnailGenerator.generateThumbnail(videoFile, 'thumbnail.jpg');
//     return thumbnail;
//   };

//   return (
//     <div className="video-library">
//       <h2>Video Library</h2>
//       {videos.map((video) => (
//         <div key={video.id} className="video-item">
//           <ReactPlayer url={video.file} controls={true} width="100%" height="auto" />
//           <img src={generateThumbnail(video.file)} alt={video.title} />
//           <p>{video.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default VideoLibrary;
 