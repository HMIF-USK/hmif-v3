import ElementContact from '@/components/svg/contact/elementContact';
const BackgroundContact: React.FC = () => {
  return (
    <>
      <div className=" absolute w-[200px] xl:w-[435px] z-[-5] -left-[15%] top-0 xl:left-0">
        <ElementContact />
      </div>
      <div className=" absolute z-[-5] w-[200px] xl:w-[435px] right-[-10%] -bottom-[30%] xl:right-[-2%] xl:top-[100px]">
        <ElementContact />
      </div>
    </>
  );
};

export default BackgroundContact;
