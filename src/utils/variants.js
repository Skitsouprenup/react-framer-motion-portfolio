
export const fadeInLeftVariant = {
    initial: {
        x: -100,
        opacity: 0
    },
    whileInView: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 1.25,
            bounce: 0.5,
        }
    }
};

export const fadeInRightVariant = {
    initial: {
        x: 100,
        opacity: 0
    },
    whileInView: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 1.5,
            stiffness: 150,
            velocity: 1.25
        }
    }
};

export const fadeInTopVariant = {
    initial: {
        y: -100,
        opacity: 0
    },
    whileInView: {
        y: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 1.25,
            stiffness: 110,
            velocity: 1
        }
    }
}

export const skillsFadeInLeft = {
    initial: {
        x: -100,
        opacity: 0
    },
    whileInView: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 0.75,
            bounce: 0.4,
            delayChildren: 0.4
        }
    }
};

export const skillCardFadeIn = {
    initial: {
        opacity: 0
    },
    whileInView: {
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 1,
        }
    }
};