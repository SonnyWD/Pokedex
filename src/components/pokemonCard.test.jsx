import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import PokemonCard from './pokemonCard';
import '@testing-library/jest-dom';

const mockPokemon = {
  id: 25,
  name: 'pikachu',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  types: ['electric'],
};

describe('PokemonCard', () => {
  test('affiche le nom, l\'image et l\'ID du Pokémon', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', mockPokemon.image);
    expect(img).toHaveAttribute('alt', mockPokemon.name);

    expect(screen.getByText(`#${mockPokemon.id}`)).toBeInTheDocument();
  });

  test('affiche les types du Pokémon', () => {
    render(<PokemonCard pokemon={mockPokemon} />);

    mockPokemon.types.forEach(type => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });
});
