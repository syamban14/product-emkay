<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required|string|max:150',
            'category' => 'required|string|max:100',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric',
        ]);

        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'product_name' => 'required|string|max:150',
            'category' => 'required|string|max:100',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric',
        ]);

        $product = Product::findOrFail($id);
        $product->update($request->all());
        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        Product::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
