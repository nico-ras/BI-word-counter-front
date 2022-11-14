import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe("Pruebas sobre custom hook useForm", () => {
  const initialForm = {
    task_name: "",
    duration: "",
  };

  test("Debe regresar valores iniciales del fromState", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      task_name: initialForm.task_name,
      duration: initialForm.duration,
      formState: {
        task_name: initialForm.task_name,
        duration: initialForm.duration,
      },
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
      onSetFormState: expect.any(Function),
    });
  });

  test("Debe cambiar el nombre de la tarea del formulario", () => {
    const taskName = "Tarea de prueba 01";

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "task_name", value: taskName } });
    });

    expect(result.current.task_name).toBe(taskName);
    expect(result.current.formState.task_name).toBe(taskName);
  });

  test("Debe de hacer uso del onSetFormState para la edicion", () => {
    const taskName = "Tarea de prueba 01";

    const { result } = renderHook(() => useForm(initialForm));
    const { onSetFormState, onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { name: "task_name", value: taskName } });
      onSetFormState({
        task_id: 2,
        task_name: "Task 2",
        duration: 4,
      });
    });

    expect(result.current.formState).toEqual({
      task_id: 2,
      task_name: "Task 2",
      duration: 4,
    });
  });

  test('Debe hacer uso del rest', () => { 

    const taskName = "Tarea de prueba 01";

    //Montar el hook

    const { result } = renderHook( () => useForm(initialForm) );
    const { onResetForm, onInputChange } = result.current;

    //debemos llamar al onInputChange  --> act, event..

    act( () => {
        onInputChange({ target: { name: "task_name", value: taskName } });
        onResetForm();
    })


    
    expect(result.current.formState).toEqual(initialForm);


  })

});
