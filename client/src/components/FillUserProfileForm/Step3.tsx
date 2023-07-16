import { FC } from 'react';

import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';

import { StepProps } from './FillUserProfileForm';

const Step3: FC<StepProps> = ({ register, data }) => {
  return (
    <>
      <Heading tagType="h4">
        Your Goal
      </Heading>
      <Input {...register("goal")} defaultValue={data.goal} />
      <Input {...register("moreFields")} defaultValue={data.moreFields} />
    </>
  );
};

export default Step3;