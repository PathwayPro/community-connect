import { FC } from 'react';

import Heading from '../../common/components/Heading/Heading';
import Input from '../../common/components/Input/Input';

import { StepProps } from './FillUserProfileForm';

const Step1: FC<StepProps> = ({ register }) => {
  return (
    <>
      <Heading tagType="h4">
        Welcome back Niloofar!
      </Heading>
      <Input type="file" {...register("avatar")} />
    </>
  );
};

export default Step1;