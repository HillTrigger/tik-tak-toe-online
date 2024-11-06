import { UiButton } from "../../uikit/UiButton";
import { UiModal } from "../../uikit/UiModal";

export function GameOverModal() {
  return (
    <UiModal isOpen={winnerSymbol} onClose={() => console.log("close")}>
      <UiModal.Header>Игра завершена</UiModal.Header>
      <UiModal.Body>
        <>
          Победитель: <span className="text-teal-600">Paromovevg</span>
        </>
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
