import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    if (!process.env.GITHUB_TOKEN) {
      return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 })
    }

    const response = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const user = await response.json()

    // Verificar se user é um objeto válido
    if (typeof user !== 'object' || user === null) {
      throw new Error('Invalid response format from GitHub API')
    }

    return NextResponse.json({
      login: (user as any).login,
      name: (user as any).name,
      avatar_url: (user as any).avatar_url,
    })
  } catch (error) {
    console.error('Error fetching GitHub user:', error)
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 })
  }
}
