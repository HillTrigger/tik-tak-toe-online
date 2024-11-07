import { UiButton } from "../../uikit/UiButton";
import { UiModal } from "../../uikit/UiModal";

export function GameOverModal({ winnerName, playersList }) {
  return (
    <UiModal isOpen={winnerName} onClose={() => console.log("close")}>
      <UiModal.Header>Игра завершена</UiModal.Header>
      <UiModal.Body>
        <>
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </>
        <div className="justify-between grid grid-cols-2 gap-x-10 gap-y-3 mt-2">
          {playersList}
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="mg" color="outline">
          Вернуться
        </UiButton>
        <UiButton size="mg" color="primary">
          Играть снова
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
