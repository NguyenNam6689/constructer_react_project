import React, { useEffect, useRef, useState } from 'react';

// Dùng để lưu một số thuốc tính css cho thẻ <p> ở đây thuộc tính WebkitLineClamp dùng để giới hạn số dònng hiển thị
const paragraphStyle = {
  WebkitLineClamp: 1,
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};
const ReadInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      console.info(ref.current.scrollHeight, ref.current.clientHeight);
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight); // Nếu chiều cao thực tế khác với chiều cao hiển thị thì cho phép hiện nút button
    }
  }, []);
  console.info(isOpen, '--------1------');
  return (
    <>
      {/* Nếu isOpen là false thì áp dụng css để hạn chế dòng */}
      <p ref={ref} style={isOpen ? null : paragraphStyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ullam aperiam suscipit
        nostrum deserunt possimus unde quam totam similique expedita fugiat nobis pariatur rerum,
        cumque quae accusantium in eligendi! Doloribus. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Distinctio cum minus dolorum, quaerat harum omnis rerum eveniet explicabo
        porro quo unde quod eaque eligendi doloribus, pariatur odit rem ut nulla.
      </p>
      {/* Nếu showReadMore bằng true thì hiện nút button lên. Nếu isOpen bằng true có nghĩa là đoạn văn đầy đủ còn false thì là thiếu */}
      {showReadMore && (
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Read less ...' : 'Read more...'}
        </button>
      )}
    </>
  );
};

export default ReadInput;
