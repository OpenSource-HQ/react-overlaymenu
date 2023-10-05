import { ReactNode, useEffect } from 'react';

interface OverlayMenuProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
  container_ref: any;
  children: ReactNode;
}

const OverlayMenu = ({
  visible = true,
  setVisible = (_) => {},
  container_ref,
  children,
}: OverlayMenuProps) => {
  const handleClickOutside = (event: any) => {
    if (
      container_ref.current &&
      !container_ref.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };
  const handleEscapePress = (e: any) => {
    if (e.code === 'Escape') {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, []);
  if (visible) {
    return children;
  }

  return null;
};

export default OverlayMenu;
