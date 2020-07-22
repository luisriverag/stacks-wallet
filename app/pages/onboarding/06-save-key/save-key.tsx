import React from 'react';
import { useHistory } from 'react-router-dom';

import routes from '../../../constants/routes.json';
import {
  Onboarding,
  OnboardingTitle,
  OnboardingButton,
  OnboardingText,
  OnboardingBackButton,
} from '../../../components/onboarding';
import { Collapse, onboardingFaq } from '../../../components/secret-key-faq';

export const SaveKey: React.FC = () => {
  const history = useHistory();
  return (
    <Onboarding>
      <OnboardingTitle>Save your Secret Key</OnboardingTitle>
      <OnboardingBackButton onClick={() => history.push(routes.SECRET_KEY)} />
      <OnboardingText>
        Paste your Secret Key wherever you keep critical, private, information such as passwords.
        Once lost, it’s lost forever. So save it somewhere you won’t forget.
      </OnboardingText>
      <OnboardingButton mt="extra-loose" onClick={() => history.push(routes.VERIFY_KEY)}>
        I've saved it
      </OnboardingButton>
      <Collapse content={onboardingFaq('Stacks Wallet')} mt="extra-loose" />
    </Onboarding>
  );
};