import { FC } from 'react';

import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';

import { StepProps } from './FillUserProfileForm';

const Step2: FC<StepProps> = ({ register, data }) => {
  return (
    <>
      <Heading tagType="h4">
        Basic Information
      </Heading>
      <Input {...register("text")} defaultValue={data.text} />
      <Input {...register("moreFields")} defaultValue={data.moreFields} />
    </>
  );
};

export default Step2;