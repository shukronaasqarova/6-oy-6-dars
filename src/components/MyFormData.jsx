import { brands, colors } from "../constants";

export default function MyFormData() {
    function handleSubmit(e) {
        e.preventDefault()
        const result = new FormData(e.target)
        console.log(result.get("brand"),result.get("name"),result.get("color"));
    }

    console.log("Men render bo'ldim");

    return (
        <div className="base-container py-10 bg-slate-300 h-full flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-96 ">
                <h2 className="font-semibold text-2xl mb-5">Yangi mashina qo'shish</h2>
                <div className="flex flex-col gap-5 ">
                    <input
                        name="name"
                        type="text"
                        placeholder="Topshiriq nomini kiriting..."
                        className="input input-bordered input-primary w-full"
                    />
                    <select
                    defaultValue="Mashina brandini tanlang*"
                     name="brand" className="select select-primary w-full">
                        <option disabled>Mashina brandini tanlang*</option>
                        {brands.map((brand) => {
                           return <option key={brand} value={brand}>{brand}</option>
                        })}
                    </select>
                    <select
                    defaultValue="Mashina rangini tanlang*"
                     name="color" className="select select-primary w-full">
                        <option disabled>Mashina rangini tanlang*</option>
                        {colors.map((color) => {
                           return <option key={color} value={color}>{color}</option>
                        })}
                    </select>
                    <button className="btn btn-primary" type="submit">Tasdiqlash</button>
                </div>
            </form>
        </div>
    )
}
