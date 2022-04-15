import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './modal.module.css'
import { modalWrVariants, modalInnerVariants } from './modalAnimation'

function Modal({ children, state, ...rest }) {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {state && <ModalInner {...rest}>{children}</ModalInner>}
    </AnimatePresence>,
    document.getElementById('modal-root'),
  )
}

export default Modal

function ModalInner({ children }) {
  return (
    <motion.div
      variants={modalWrVariants}
      initial="start"
      animate="show"
      exit="end"
      className={styles.wrapper}
    >
      <motion.div
        variants={modalInnerVariants}
        className={styles.inner}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
