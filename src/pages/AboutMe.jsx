import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-[#F5F5F5] text-[#1A0F0F] min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* หัวข้อ */}
        <h1 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
          About Me
        </h1>

        {/* รูปโปรไฟล์ */}
        <img
          src="/picture/me4.png"
          alt="Profile"
          className="mx-auto w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
        />

        {/* เนื้อหาหลัก */}
        <p className="leading-relaxed text-lg mb-8">
          สวัสดีครับ
          ผมเป็นนักพัฒนาเว็บไซต์ที่หลงใหลในการสร้างสรรค์ประสบการณ์ผู้ใช้ที่ยอดเยี่ยมและพัฒนาเว็บแอปพลิเคชันที่ตอบโจทย์ความต้องการของผู้ใช้งานได้อย่างแท้จริงจากประสบการณ์ในการทำงานด้าน
          UI/UX ผมเชื่อว่าการออกแบบที่ดีไม่ได้เป็นเพียงแค่ความสวยงาม
          แต่ต้องใช้งานง่ายและมีประสิทธิภาพ
          ผมจึงให้ความสำคัญกับการทำความเข้าใจปัญหาของผู้ใช้งานอย่างลึกซึ้ง
          และนำความรู้ด้านการออกแบบมาผสานกับการเขียนโค้ด
          เพื่อสร้างสรรค์เว็บไซต์ที่ทั้งดูดีและทำงานได้อย่างราบรื่น
          ผมมีความเชี่ยวชาญในการพัฒนาส่วนหน้าบ้าน
          (Front-end) โดยใช้เทคโนโลยีที่ทันสมัย เช่น React และ Tailwind CSS
          เพื่อสร้างอินเทอร์เฟซที่รวดเร็วและเป็นมิตรต่อผู้ใช้
          ผมชอบความท้าทายในการแก้ไขปัญหาที่ซับซ้อน
          และมุ่งมั่นที่จะพัฒนาตัวเองอยู่เสมอ
          เพื่อส่งมอบผลงานที่มีคุณภาพและสร้างประโยชน์ให้กับผู้คนครับ
        </p>

        {/* Section: ข้อมูลส่วนตัว */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
              ข้อมูลส่วนตัว
            </h2>
            <ul className="space-y-2 text-lg">
              <li><span className="font-bold">ชื่อ:</span> นายล้อมพงษ์ สระทองมี</li>
              <li><span className="font-bold">อีเมล:</span> lomphongsrathongmee@email.com</li>
              <li><span className="font-bold">เบอร์โทร:</span> 098-074-0536</li>
              <li><span className="font-bold">ที่อยู่:</span> นครปฐม, ประเทศไทย</li>
            </ul>
          </div>

          {/* Section: ความถนัด */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
              ความถนัด
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>การพัฒนาเว็บด้วย React และ Tailwind CSS</li>
              <li>ออกแบบ UI/UX ที่ใช้งานง่าย</li>
              <li>แก้ไขปัญหาและดีบักโค้ดที่ซับซ้อน</li>
              <li>ทำงานเป็นทีมและใช้ Git/GitHub</li>
            </ul>
          </div>
        </div>

        {/* Section: เป้าหมายในอาชีพ */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 border-b-2 border-yellow-500 inline-block">
            เป้าหมายในอาชีพ
          </h2>
          <p className="text-lg leading-relaxed">
            กินก๋วยเตี๋ยว
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
