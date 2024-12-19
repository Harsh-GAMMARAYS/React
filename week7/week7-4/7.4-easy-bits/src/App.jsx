import { RecoilRoot, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms"

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotifcationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotifcationCount >= 100 ? "99+" : networkNotifcationCount})</button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount >= 100 ? "99+" : messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount >= 100 ? "99+" : notificationAtomCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
