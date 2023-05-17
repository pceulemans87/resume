import React from 'react';

interface OutsideAlerterProps {
    children: React.ReactNode;
    handleClose: () => void;
}

const OutsideAlerter = (props: OutsideAlerterProps) => {
    const { children, handleClose } = props;
    const outsideRef = React.useRef<HTMLDivElement>(null);

    function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
        React.useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    handleClose();
                }
            }

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter( outsideRef );

    return (
        <div ref={ outsideRef }>
            { children }
        </div>
    )
}

export default OutsideAlerter;