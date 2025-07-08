

export default function Form() {
    return (
        <>
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Categoria:</label>
                <select id="category"
                className="border border-slate-300 p-2 rounded-lg w-full bg-white">
                    <option value="food">Comida</option>
                    <option value="exercise">Ejercicio</option>
                </select>
            </div>
        </form>
        </>
    )
}
