import Image from "next/image";
import React from "react";

const post = () => {
  return (
    <div className="grid grid-rows-2 mx-14">
      <div className="flex mb-12 justify-center">
        <div className="flex-1 grid grid-rows-2 gap-5">
          <div className="">
            <h1>Đoàn Văn Hậu</h1>
            <p>
              Đoàn Văn Hậu là một cầu thủ bóng đá chuyên nghiệp người Việt Nam
              chơi ở vị trí hậu vệ trái cho câu lạc bộ Công an Hà Nội và đội
              tuyển quốc gia Việt Nam. Anh được gọi vào đội tuyển khi mới 18
              tuổi và trở thành cầu thủ trẻ nhất tuyển Việt Nam năm 2017
              n, những đoạn khai triển văn bản, đoạn kết thúc văn bản. Mỗi đoạn phải có sự hoàn chỉnh nhất định nào đó về mặt ý, về mặt nội dung. Nhưng thế nào là một nội dung, một ý hoàn chỉnh thì không có tiêu chí để xác định rõ ràng. Một văn bản, tuỳ theo người đọc cảm nhận mà phân chia ra thành các đoạn, sự phân chia có thể không thống nhất giữa những người đọc: có người chia theo ý lớn, có người chia theo ý nhỏ. Ý l
            </p>
            </div>
            <div className="flex h-12 content-end">
              <Image
                className="rounded-full object-scale-down bg-cyan-100"
                src="https://instagram.fhnd2-2.fna.fbcdn.net/v/t51.2885-15/335916488_3414114535529028_3057281251488487223_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fhnd2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=xQgovkN9ioMAX-F1WfY&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=MzA1ODk4MTUwNTc5OTYwMTExNA%3D%3D.2-ccb7-5&oh=00_AfBjOKsPwqcdEPB8o-jYiozpXEb1Acnp_XU8ezBjUvARpA&oe=64865EB7&_nc_sid=4f9c1e"
                alt=""
                width={50}
                height={20}
              />
              <span className="flex justify-center items-center ml-2">
                username
              </span>
          </div>
        </div>
        <div className="flex flex-1 m-auto justify-center relative h-400">
          <Image
            className="object-cover h-72 "
            src="https://instagram.fhnd2-2.fna.fbcdn.net/v/t51.2885-15/335916488_3414114535529028_3057281251488487223_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fhnd2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=xQgovkN9ioMAX-F1WfY&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=MzA1ODk4MTUwNTc5OTYwMTExNA%3D%3D.2-ccb7-5&oh=00_AfBjOKsPwqcdEPB8o-jYiozpXEb1Acnp_XU8ezBjUvARpA&oe=64865EB7&_nc_sid=4f9c1e"
            fill={true}
          />
        </div>
      </div>
      <div>
        <p>content</p>
      </div>
    </div>
  );
};

export default post;
