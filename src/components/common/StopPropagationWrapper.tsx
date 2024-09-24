type StopPropagationWrapperProps = {
    children: React.ReactElement;
    className?: string;
};

const StopPropagationWrapper: React.FC<StopPropagationWrapperProps> = ({ children, className }) => {
    const handleStopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <nav onClick={handleStopPropagation} className={className}>
            {children}
        </nav>
    );
};

export default StopPropagationWrapper;