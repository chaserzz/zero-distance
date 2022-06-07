import React, { ReactNode } from 'react';
import { ActorProps } from 'src/typings';

declare const Actor: React.MemoExoticComponent<({ children, name, duration, easing }: ActorProps) => JSX.Element>;

interface StateProps {
    children: ReactNode | ReactNode[];
}

declare const Stage: React.MemoExoticComponent<({ children }: StateProps) => JSX.Element>;

export { Actor, Stage };
